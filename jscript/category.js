    document.querySelectorAll('.article-content h2').forEach((desc) => {
    desc.textContent = truncateText(desc.textContent, 130);
  });

  document.querySelectorAll('.article-content p').forEach((desc) => {
    desc.textContent = truncateText(desc.textContent, 200);
  });