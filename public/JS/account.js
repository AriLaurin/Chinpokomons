const form = document.querySelector("form");
const formButton = document.querySelector("#formsubmit");


formButton.addEventListener("click", async (e) => {

  e.preventDefault();

  //form values
  const NAME = form.NAME.value
  const A1 = form.ABILITY1.value
  const A2 = form.ABILITY2.value
  const A3 = form.ABILITY3.value
  const AUTHOR = form.AUTHOR.dataset.doc
  console.log(NAME, A1, A2, A3, AUTHOR);


  try {
    //sender data som lager bruker
    const res = await fetch('/account',{
        method: 'post',
        body: JSON.stringify({name: NAME, ability1: A1, ability2: A2, ability3: A3, author: AUTHOR}),
        headers: {'Content-Type': 'application/json'}
    })
    const blog = await res.json();
       
    console.log("blog request sent" + blog);

} catch (err) {
    console.log(err)
}

})