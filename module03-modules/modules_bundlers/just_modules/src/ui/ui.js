import { storeData, getData, updateDataArray, removeOneItem } from '../storage/localStorage.js';

const form = document.getElementById('form');
const list = document.getElementById('dataList');
let quotes = getData('quotes') || [];

const createListItem = (item) => {
  const li = document.createElement('li');
  li.textContent = item;
  list.appendChild(li);
};

export const handleSubmit = () => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.getElementById('dataInput').value.trim();
    quotes.push(input);
    storeData("quotes", quotes);
    createListItem(input);
  });
};

export const displayItems = () => {
    quotes = getData('quotes') || [];
    quotes.forEach((quote) => createListItem(quote));
}