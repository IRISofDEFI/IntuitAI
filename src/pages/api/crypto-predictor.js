export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    const { message } = req.body;

    // Big pool of fake "crypto predictions"
    const fakeReplies = [
        "📈 Bitcoin looks strong today, but remember: this is not financial advice!",
        "📉 Ethereum might see some correction soon. Trade carefully!",
        "🤖 My prediction model says the market could be sideways this week.",
        "🚀 Altcoins may pump, but always manage your risk!",
        "💡 Tip: Always do your own research before making financial moves.",
        "🐻 A bearish trend could be forming, keep your stop-loss tight.",
        "📊 BTC dominance is rising — altcoins may bleed short-term.",
        "🔥 Some meme coins are gaining traction, but don’t chase green candles.",
        "💤 The market might consolidate for a few days before a move.",
        "🎯 Key resistance is near, breaking it could send price higher.",
        "💎 Remember: strong hands survive the dips.",
        "🌕 Some analysts expect Bitcoin to retest $100K in the future.",
        "🐂 Bulls are charging — short squeezes may be incoming!",
        "⚠️ Be cautious, sudden volatility could wipe out over-leveraged positions.",
        "📌 Ethereum 2.0 narrative could attract new investors soon.",
        "🌍 Global markets are affecting crypto sentiment this week.",
        "🦍 Retail traders are showing renewed interest in meme tokens.",
        "🏦 Institutional inflows could stabilize BTC around current levels.",
        "📉 A fake breakout may trap late buyers — watch carefully.",
        "🕒 Timing the market is hard, focus on time *in* the market instead.",
        "🚨 Expect possible liquidation cascades if major support breaks.",
        "📢 Market news and narratives drive short-term price more than charts.",
        "🍀 Luck favors the patient hodlers in this volatile market.",
        "🧮 Technical indicators hint at a potential trend reversal soon."
    ];

    // Pick a random reply
    const reply = fakeReplies[Math.floor(Math.random() * fakeReplies.length)];

    return res.status(200).json({ reply });
}
