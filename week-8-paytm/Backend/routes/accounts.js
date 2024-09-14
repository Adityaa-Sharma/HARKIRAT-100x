// backend/routes/account.js
const express = require('express');
const { authMiddleware } = require('../middleware');
const { Account } = require('../db');
const { default: mongoose } = require('mongoose');

const router = express.Router();

router.get("/balance", authMiddleware, async (req, res) => {
    const account = await Account.findOne({
        userId: req.userId
    });

    res.json({
        balance: account.balance
    })
});

router.post("/transfer", authMiddleware, async (req, res) => {
    const session = await mongoose.startSession();
    let retries = 3;  // Number of retry attempts in case of transient errors

    try {
        await session.withTransaction(async () => {
            const { amount, to } = req.body;

            // Fetch the accounts within the transaction
            const account = await Account.findOne({ userId: req.userId }).session(session);

            if (!account || account.balance < amount) {
                throw new Error("Insufficient balance");
            }

            const toAccount = await Account.findOne({ userId: to }).session(session);

            if (!toAccount) {
                throw new Error("Invalid account");
            }

            // Perform the transfer
            await Account.updateOne({ userId: req.userId }, { $inc: { balance: -amount } }).session(session);
            await Account.updateOne({ userId: to }, { $inc: { balance: amount } }).session(session);
        }, {
            // Retry if transient errors are encountered
            readConcern: { level: 'snapshot' },  // Consistency settings
            writeConcern: { w: 'majority' },    // Majority write concern
            maxCommitTimeMS: 1000               // Timeout for the transaction
        });

        res.json({
            message: "Transfer successful"
        });
    } catch (error) {
        // Retry logic for transient errors
        if (retries > 0 && error.errorLabels && error.errorLabels.includes('TransientTransactionError')) {
            retries -= 1;
            console.log('Retrying transaction...', retries, 'retries left');
            return router.post("/transfer", authMiddleware, req, res); // Retry the same operation
        } else {
            console.log('Transaction failed:', error.message);
            await session.abortTransaction();
            return res.status(500).json({
                message: error.message || "Transfer failed, please try again later"
            });
        }
    } finally {
        session.endSession();
    }
});

module.exports = router;