# AkanWebTracker

## Description

This is a web which help a user to track his or her birthday and let it tells your your Akan name according to gender. Akan names are derived from Ghanian culture. Frequently in Ghana, children are given their first name as a 'day name' which corresponds to the day in the week they were born. Here are Ghanian day names.

## Demo

Here is a working git live page online demo: https://dennishg32.github.io/AkanWebTarcker

## Landing Page

Currently as you can see there is picture and my names of mine

<img src="https://github.com/dennishg32/AkanWebTarcker/blob/master/images/landingpage.png" width="auto">

## Built with

- [HTML](https://www.w3schools.com/html) - is the most basic building block of the Web. It defines the meaning and structure of web content.
- [CSS](https://www.w3schools.com/css) - is the language we use to style an HTML document.
- [JAVASCRIPT](https://www.w3schools.com/js/DEFAULT.asp) - JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions
- [BOOTSTRAP](https://getbootstrap.com/) - Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.

## Setup/Installation Requirements

To access this website you must have

- Internet access
- Browser (chrome, safari, firefox)
- Script to run

```javascript
function validate() {
  const form = document.getElementById("form");
  var day = parseInt(document.getElementById("day").value);
  var month = parseInt(document.getElementById("month").value);
  var year = parseInt(document.getElementById("year").value);
  var gender = document.querySelector('input[name="gender"]:checked').value;

  console.log(day);
  console.log(month);
  console.log(year);
  console.log(gender);
}
```

## Behavior-Driven Development

This platform allows you to search your Akan name using your birthday date.

```bash
context 'Tracking Birthday' do
  it 'Result is found' do
    Given 'I am on the landing page' do
      visit '/dennishg32.github.io/AkanWebTarcker'
      expect(page).to have_content('AkanForm')
    end

    When 'I check birthday date' do
      fill_in 'Form', with: '01', '12', '2020'
      click_button 'Check'
    end

    Then 'I should see Akan name and bornday' do
      expect(page).to have_content('AkanForm')
    end
  end
end
```

## Known Bugs

If you find a bug, kindly open an issue [here](https://github.com/dennishg32/AkanWebTarcker/issues) by including your search and the expected result.

## Author

| Denys HAGANJE                                                                                      |
| -------------------------------------------------------------------------------------------------- |
| <img src="https://github.com/dennishg32/webAssignment/blob/master/images/denys.jpg" width="250px"> |

### License

MIT © [Denys HAGANJE](https://github.com/dennishg32)
Copyright © 2020
