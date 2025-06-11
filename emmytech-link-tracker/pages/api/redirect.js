export default async function handler(req, res) {
  const { ref } = req.query;

  if (!ref) {
    return res.status(400).send("Missing referral ID");
  }

  // Log the referral to your terminal
  console.log(`[TRACKED] Referral from: ${ref} at ${new Date().toISOString()}`);

  // Replace with your actual ION affiliate link
  const redirectURL = "https://your-ion-affiliate-link.com";

  // Redirect the user
  res.writeHead(302, { Location: redirectURL });
  res.end();
}
