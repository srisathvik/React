export default function Input({handleAddItem, itemId}) {
    async function handleFormSubmit(event) {
        event.preventDefault();
        const fd = new FormData(event.target);
        const data = Object.fromEntries(fd.entries());
        data.completed = false;
        data.id = itemId;
        console.log(data);
        // handleAddItem(data);
        const response = await fetch('http://localhost:8083/', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
          })
          const reslult = await response.json();
          console.log(reslult);

    }
    return(
        <form onSubmit={handleFormSubmit} >
            <label htmlFor="title">Todo Text: </label>
            <input placeholder="Enter Todo" name="title" id="title" />
            <label htmlFor="description">Description: </label>
            <input placeholder="Enter Todo" name="description" id="description" />
            <button>Add Item</button>
        </form>
    )
}