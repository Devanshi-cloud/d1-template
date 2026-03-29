export default {
  async fetch(request) {
    try {
      const res = await fetch("https://www.mining.com/feed", {
        headers: {
          "User-Agent": "Mozilla/5.0"
        }
      });

      return new Response(res.body, {
        status: res.status,
        headers: {
          "Content-Type": "application/xml"
        }
      });
    } catch (err) {
      return new Response("Error fetching RSS", { status: 500 });
    }
  }
};
