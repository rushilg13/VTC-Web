# For Blog
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/blog')
def blog():
    return render_template('blog_posts.html')

@app.route('/blog1')
def blog1():
    return render_template('/pages/blog1.html')

@app.route('/blog2')
def blog2():
    return render_template('/pages/blog2.html')

@app.route('/blog3')
def blog3():
    return render_template('/pages/blog3.html')

if __name__ == "__main__":
    app.run(debug=True)