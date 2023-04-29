import psycopg2
from tmdbv3api import TMDb
from tmdbv3api import Movie

# Set up a connection to your PostgreSQL database
conn = psycopg2.connect(
    host="localhost",
    database="MovieDB",
    user="postgres",
    password="3008"
)

# Set up a cursor to execute SQL commands
cur = conn.cursor()

# Set up the TMDb API client and get details of 100 popular movies
tmdb = TMDb()
tmdb.api_key = '62c8e7996d992ffb3a2ddb7a1febbf65'

movie = Movie()
popular_movies = movie.popular()[:100]

# Loop through the movie data and insert it into PostgreSQL
for movie_data in popular_movies:
    sql = """
        INSERT INTO movies (id, title, overview, release_date, vote_average, vote_count)
        VALUES (%s, %s, %s, %s, %s, %s)
    """
    cur.execute(sql, (
        movie_data['id'],
        movie_data['title'],
        movie_data['overview'],
        movie_data['release_date'],
        movie_data['vote_average'],
        movie_data['vote_count']
    ))

# Commit the changes to the database and close the connection
conn.commit()
cur.close()
conn.close()
