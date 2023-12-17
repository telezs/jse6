
import app from "../../app.js";
import {
  collection,
  getDocs,
  Timestamp,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore-lite.js";
import Card from "../../components/card/card.js";

class PostList {
  $postList;

  constructor() {
    // set title of HTML
    document.getElementsByTagName("title")[0].innerHTML = "PostList";
  }

  async initRender(container) {
    let main_title = document.createElement("div");
    main_title.classList.add("main-title");

    let post_qty = document.createElement("div");
    post_qty.id = "post-qty";
    post_qty.innerText = this.getPostsQty();

    let create_post_btn = document.createElement("button");
    create_post_btn.type = "button";
    create_post_btn.classList.add("btn");
    create_post_btn.classList.add("btn-primary");
    create_post_btn.innerText = "Create post";
    create_post_btn.addEventListener("click", () => {
      this.gotoPostCreate();
    });
    main_title.appendChild(post_qty);
    main_title.appendChild(create_post_btn);

    let post_list = document.createElement("div");
    post_list.id = "post-list";

    let no_data_img = document.createElement("img");
    no_data_img.src =
      "https://cdn.iconscout.com/icon/free/png-256/free-data-not-found-1965034-1662569.png";
    no_data_img.style = "width: 50%";

    if (this.getPostsQty() == null) {
      post_list.appendChild(no_data_img);
    } else {
      this.addPostList(post_list);
    }

    container.appendChild(main_title);
    container.appendChild(post_list);
  }

  gotoPostCreate() {
    //todo
  }

  async addPostList(post_list_component) {
    // add post list
    let postlist = await this.getPostList();
    let list = [];
    postlist.forEach((element) => {
      // declare some var for card
      const id = element.id;
      const created_by = this.getUsername(element.data.created_by);
      const created_at = calPostCreatedTime(element.data.created_at);
      const title = element.data.title;
      const caption = element.data.caption;
      let card = new Card(id, created_by, created_at, title, caption);
      card.initRender(post_list_component);
      // add event for title
      list.push(element);
    });

    // add event
    list.map((p) => {
      document.getElementById(p.id).addEventListener("click", () => {
        this.gotoPost(p);
      });
    });
  }

  getUsername() {
    //todo
  }

  async getPostList() {
    let list = [];

    // get list from firestore
    //todo

    // this.$postList = list;
    return list;
  }

  getPostsQty() {
    //todo - change value for len
    const len = 1;
    if (len == 0) {
      return null;
    } else if (len == 1) {
      return len + " post";
    } else {
      return len + " posts";
    }
  }

  gotoPost(p) {
    //todo
  }
}

export default PostList;

export function calPostCreatedTime(time) {
  // convert: original: firebase.firestore
  const timestamp = new Timestamp(time.seconds, time.nanoseconds);

  const currentDate = new Date();
  let date = new Date(timestamp.toDate().toDateString());

  // check time past
  var diff = currentDate - date;
  const minutes = Math.round(diff / (1000 * 60));
  const hours = Math.round(diff / (1000 * 60 * 60));
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const weeks = Math.floor(diff / (1000 * 60 * 60 * 24 * 7));
  const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 31));
  const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));

  // complete full time string
  // year
  if (years > 1) {
    return years + " years ago";
  } else if (years == 1) {
    return "1 year ago";
  } else {
    // month
    if (months > 1) {
      return months + " months ago";
    } else if (months == 1) {
      return "1 month ago";
    } else {
      // week
      if (weeks > 1) {
        return weeks + " weeks ago";
      } else if (weeks == 1) {
        return "1 week ago";
      } else {
        // day
        if (days > 1) {
          return days + " days ago";
        } else if (days == 1) {
          return "1 day ago";
        } else {
          // hour
          if (hours > 1) {
            return hours + " hours ago";
          } else if (hours == 1) {
            return "1 hour ago";
          } else {
            // min
            if (minutes > 1) {
              return minutes + " minutes ago";
            } else if (minutes == 1) {
              return "1 minutes ago";
            } else {
              return "just now";
            }
          }
        }
      }
    }
  }
}
