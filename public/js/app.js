fetch('/weather?city=manila')
  .then((res) => res.json())
  .then(({ error, summary, location }) => (
    error ? console.log(error) : console.log({ summary, location })
  ))
  .catch((e) => console.log(e));
