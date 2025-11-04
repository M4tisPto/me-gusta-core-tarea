const post = document.querySelectorAll('.post')

post.forEach(post =>{
    const likeButton = post.querySelector('.like-btn')
    const likeCount = post.querySelector('.likes p')
    let count = 0
    likeButton.addEventListener('click', function(){
        count++
        likeCount.textContent = `${count} like(s)`
    })
})