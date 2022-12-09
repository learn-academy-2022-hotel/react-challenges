# User Stories
- As a user, I can see a Header component with the title of your app.
```javascript
    const Header = () => {

        return (
            <h1>The James & Sammy App</h1>
        )
    }

    export default Header;
```
- As a user, I can see a Profile component with information about you and your partner.
```javascript

const Profile = () => {
    return (
        <>
            <h2>Sammy</h2>
            <p>
                Hi, I don't really want to share anything at the moment.

            </p>
            <h2>James</h2>
            <p>
                Hi, I also don't want to share anything!
            </p>
        </>

    )
}

export default Profile;
```

- As a user, I can see a Footer component with the name of your cohort.
```javascript

const Footer = () => {
    return(
        <footer>&copy; James Quillen | Sammy Torres |</footer>
    )
}

export default Footer;
```

- As a user, I can see a Favorites component with a list of top five favorites (i.e. top five favorite TV shows, top five favorite songs, top five favorite taco shops).
```javascript

const Favorites = () => {
    return (
        <>
            <h3>Top Five Favorite Pizza Toppings</h3>
            <ol>
                <li>Sausage</li>
                <li>Pepperoni</li>
                <li>Onion</li>
                <li>Black Olives</li>
                <li>Green Pepper</li>
            </ol>

        </>
    )
}

export default Favorites;
```