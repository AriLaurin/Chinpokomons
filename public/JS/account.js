const form = document.querySelector("form");
const formButton = document.querySelector("#formsubmit");


formButton.addEventListener("click", async (e) => {

  e.preventDefault();

  const formData = new FormData();

  //form image value
  formData.append("image", form.IMAGE.files[0]);

  //form values
  formData.append('name', form.NAME.value);
  formData.append('ability1', form.ABILITY1.value);
  formData.append('ability2', form.ABILITY2.value);
  formData.append('ability3', form.ABILITY3.value);
  formData.append('author', form.AUTHOR.dataset.doc); 
//   const NAME = form.NAME.value
//   const A1 = form.ABILITY1.value
//   const A2 = form.ABILITY2.value
//   const A3 = form.ABILITY3.value
//   const AUTHOR = form.AUTHOR.dataset.doc
//   const IMG = form.IMAGE.value
//   console.log(IMG);


  try {
    //sender data som lager bruker
    const res = await fetch('/account',{
        method: 'post',
        body: formData,
        // body: JSON.stringify({name: NAME, ability1: A1, ability2: A2, ability3: A3, author: AUTHOR, file: IMG}),
        headers: {},
    })
    const pokoData = await res.json();
       
    console.log(pokoData);
    location.reload();

} catch (err) {
    console.log(err)
    const message = await err.text();
    console.log('error message:', message);
}

})