const commentFormHandler = async (event) => {
  event.preventDefault();

  const content = document.querySelector('#comment-content').value.trim();
  const id = document.getElementById('post-id').getAttribute('data-id');
  if (content) {

    const response = await fetch(`/api/posts/${id}`, {
      method: 'POST',
      body: JSON.stringify({ content }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace(`/post/${id}`);
    } else {
      alert('Failed to create comment');
    }
  }
};


document
  .querySelector('.comment-form')
  .addEventListener('submit', commentFormHandler);

