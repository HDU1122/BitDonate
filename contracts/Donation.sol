// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <8.10.0;

contract Donation {

  uint public nPosts;
  struct Post{
      uint id;
      uint amount_needed;
      uint amount_raised;
      string title;
      string content;
      string photo_url;
      address payable reciever;
  }

  mapping(address => Post) public posts;

  mapping(address => bool) public havePost;

  error noPostForAddress();

  function donate(address reciever, uint amount) public {
    if (!havePost[msg.sender]){
      revert noPostForAddress();
    }
    payable(reciever).transfer(amount);
    posts[reciever].amount_raised += amount;
  }


  error cannotCreateMultiplePost();
  function makePost(uint amount_needed, string memory title, string memory content, string memory photo_url) public {
    if (havePost[msg.sender]){
      revert cannotCreateMultiplePost();
    }
    nPosts++;
    Post memory post = Post(nPosts, amount_needed, 0, title, content, photo_url, payable(msg.sender));
    posts[msg.sender] = post;
    havePost[msg.sender] = true;
  }
  
  function get(address usr) public view returns (uint id, string memory title, string memory content,
    string memory photo_url, address payable reciever) {
    if (!havePost[usr]) {
      revert noPostForAddress();
    }
    id = posts[usr].id;
    title = posts[usr].title;
    content = posts[usr].content;
    photo_url = posts[usr].photo_url;
    reciever = posts[usr].reciever;
  }
  constructor() {
    nPosts = 0;
  }
}