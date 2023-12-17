//Code file card.js
class Card {
    constructor(id, created_by, created_at, title, caption) {
      this.id = id;
      this.created_by = created_by;
      this.created_at = created_at;
      this.title = title;
      this.caption = caption;
    }
  
    initRender(list) {
      let p = document.createElement("div");
      p.classList.add("post");
  
      let p_details = document.createElement("div");
      p_details.classList.add("post-details");
      p_details.innerHTML =
        "Posted by" +
        `<span class="created-by">${this.created_by}</span>
        <span class="created-at">${this.created_at}</span>`;
  
      let p_content = document.createElement("div");
      p_content.classList.add("post-content");
  
      let p_title = document.createElement("div");
      p_title.classList.add("post-title");
      p_title.id = this.id;
      p_title.innerText = this.title;
  
      let p_subtext = document.createElement("div");
      p_subtext.classList.add("post-subtext");
      p_subtext.innerText = this.caption;
  
      p_content.appendChild(p_title);
      p_content.appendChild(p_subtext);
  
      p.appendChild(p_details);
      p.appendChild(p_content);
  
      list.appendChild(p);
    }
  
    gotoPost(p) {
      //todo
    }
  }
  
  export default Card;