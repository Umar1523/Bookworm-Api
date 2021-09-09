import express from 'express';

const router = express.Router();

router.get("/search", (req, res) => {
    res.json({
        books: [
            {
                goodreadsId: 1,
                title: "1984",
                authors: "Orwell",
                covers: [
                    "http://images.gr-assests.com/books/13489905661/5470.jpg",
                    "http://images.gr-assests.com/books/15046119571/9577857.jpg"
                ],
                pages: 198
            },
            {
                goodreadsId: 2,
                title: "Three Men in a Boat",
                authors: "Jerome K. Jerome",
                covers: [
                    "http://images.gr-assests.com/books/13927916561/4921.jpg",
                    "http://images.gr-assests.com/books/13120368781/627830.jpg"
                ],
                pages: 256
            }

        ]
    })
})

export default router;