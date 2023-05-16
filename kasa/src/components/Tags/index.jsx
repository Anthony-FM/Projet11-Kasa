import "./index.css"

function Tags({tags,id }){
    let listTags = tags.map(tag => 
        <div className="tags" key={`${id}&${tag}`}>{tag}</div>
    )
    return <div className="tagsContainer">
        {listTags}
    </div>
}

export default Tags