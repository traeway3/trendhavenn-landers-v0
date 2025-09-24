// This is your affiliate link. It is securely stored on your server and not exposed to the public.
const AFFILIATE_LINK = "https://rewarduplevel.com/aff_c?offer_id=3011&aff_id=27696&source=index892";

// This function handles the redirect when a user visits the /api/redirect endpoint.
export default function (req, res) {
    // You can add more complex logic here if needed, like cloaking based on user-agent or IP.

    // Perform a 302 (Temporary) redirect to the affiliate link.
    res.writeHead(302, {
      'Location': AFFILIATE_LINK
    });
    res.end();
}
