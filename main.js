const firstSection = document.querySelector('main section');

firstSection.classList.add('featured');

const newArticle = document.createElement('article')

newArticle.innerHTML = `
<article>
  <img
    src="./images/paul-gilmore-unsplash.jpg"
    alt="Image of a mountain in front of a lake."
  />
  <h3>Stop Planning</h3>
  <p>
    You -- yes you! You're an over-planner, I can tell. It's time to stop
    planning so much and instead focusing on relaxing. Taking a break at all is
    so stressful these days; why add to the stress by overworking yourself?
  </p>
  <aside>
    <p>
      <span><strong>Read Time:</strong> 4 Minutes</span
      ><a href="#">Read more...</a>
    </p>
  </aside>
</article>`

//add new article at the end by using append

document.querySelector('section.posts').appendChild(newArticle);

// remove the first featured post 'read time '
const allPosts = document.querySelector('nav ul li:first-child')
allPosts.remove()

const spanElement = document.querySelector('section article aside p span')
spanElement.remove()

// Remove the last post from the page, titled "Stop Planning".
newArticle.remove()

// Remove all titles from all non-featured posts.

const titles = document.querySelectorAll('h3')

titles.forEach(title => {
    title.remove()
})

