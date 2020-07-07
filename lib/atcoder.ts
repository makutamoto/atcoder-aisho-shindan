import axios from 'axios';
import { JSDOM } from 'jsdom';

const USER_PAGE = (name) => `https://atcoder.jp/users/${name}`;

const NAME_SELECTOR = '#main-container h3 span';
const RATING_SELECTOR = '#main-container table span';
const AVATAR_SELECTOR = '#main-container img.avatar';

export interface User {
    name: string,
    rating: number,
    avatar: string,
}

export async function getUser(username: string): Promise<User | null> {
    let res = await axios.get(USER_PAGE(username));
    let { document } = new JSDOM(res.data).window;
    let name = document.querySelector(NAME_SELECTOR);
    let rating = document.querySelector(RATING_SELECTOR);
    let avatar = document.querySelector(AVATAR_SELECTOR);
    return name && rating && avatar && {
        name: name.textContent,
        rating: Number(rating.textContent),
        avatar: avatar.getAttribute('src'),
    };
}
