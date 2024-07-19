const bcrypt = require("bcryptjs")
module.exports = [
    {
        "username": "john_doe",
        "profileName": "John Doe",
        "password": bcrypt.hashSync("password123", 12),
        "bio": "Lover of technology, coffee, and good books."
    },
    {
        "username": "jane_smith",
        "profileName": "Jane Smith",
        "password": bcrypt.hashSync("securePass!987", 12),
        "bio": "Adventurer and foodie. Always exploring new places and tastes."
    },
    {
        "username": "tech_guru",
        "profileName": "Tech Guru",
        "password": bcrypt.hashSync("Techy@2024", 12),
        "bio": "Sharing the latest in tech and innovation. Follow for updates!"
    },
    {
        "username": "art_lover",
        "profileName": "Art Lover",
        "password": bcrypt.hashSync("Artistic@55", 12),
        "bio": "Art enthusiast. Painting the world one canvas at a time."
    },
    {
        "username": "fitness_fanatic",
        "profileName": "Fitness Fanatic",
        "password": bcrypt.hashSync("FitLife!123", 12),
        "bio": "Fitness coach and motivational speaker. Let's get fit together!"
    },
    {
        "username": "music_maven",
        "profileName": "Music Maven",
        "password": bcrypt.hashSync("Melody#2021", 12),
        "bio": "Living life one song at a time. Music reviews and playlists."
    },
    {
        "username": "travel_bug",
        "profileName": "Travel Bug",
        "password": bcrypt.hashSync("Travel@1234", 12),
        "bio": "Wanderlust soul exploring the globe. Join my adventures!"
    },
    {
        "username": "gamer_gal",
        "profileName": "Gamer Gal",
        "password": bcrypt.hashSync("GameOn!456", 12),
        "bio": "Pro gamer and streamer. Level up with me!"
    },
    {
        "username": "chef_extraordinaire",
        "profileName": "Chef Extraordinaire",
        "password": bcrypt.hashSync("Culinary@2020", 12),
        "bio": "Professional chef sharing recipes and cooking tips. Bon appétit!"
    },
    {
        "username": "bookworm_bella",
        "profileName": "Bookworm Bella",
        "password": bcrypt.hashSync("Read@456", 12),
        "bio": "Book lover and writer. Dive into the world of books with me."
    }
]