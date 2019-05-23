# jscountdown
> A small library for creating countdown timere with js

> written by infrustrationMC

## How to import

Import the `src.js` file both on the `<head>` and `<body>` part.

```html
<html>
    <head>
        ...
        <script src="src.js"></script>
        ...
    </head>
    <body>
        <script src="src.js"></script>
        <script>
            Add new line here by calling displayNewLine(...) functions 
        </script>
    </body>
</html>
```

## Structure after success import and calling of function

Use `displayNewLine(...)` to display a new countdown timer. It would look like this:


Title you want to display (1)

**TIME LEFT** (2)

**TIME TO COUNTDOWN TO** (3)

One example html file is available for you

## Syntax of function `displayNewLine()`
The function `displayNewLine()` receives 3 required parameters and 1 optional parameter
```javascript
displayNewLine(
    title: string, 
    endTime: string, 
    titleID: string, 
    mayNotAttend: bool = default(true)
    );
```

`title`: (1) above

`endTime`: (3) above. The time you want to count down to. Syntax: `MMM DD, YYYY hh:mm[:ss]` (`ss` is optional)

`titleID`: This library base on ID in order to display correctly. You can put in any ID name, as long as all IDs are different.

`mayNotAttend`: This is for anyones who attends in (for me, programming) contest only. This parameter is optional. `true` if you cannot attend a contest and nothing if you can

Also, every timer will turn green if the time is near and purple if the timer runs out.

## Set optional languages

Before calling `displayNewLine(...)`, you can set your desired languages using 
```js
setLang(lang: string)
```

The `lang` parameter can be:

* `vi` for Vietnamese. Format `DD ngày hh giờ mm phút ss giây`

* `en` for English. Format `DD day(s) hh hour(s) mm minute(s) ss second(s)`

* `de` for German. Format `DD Tag(e) hh Stunde(n) mm Minute(n) ss Sekunde(n)`

* Any other string for default language. Format `-- d -- h -- m -- s`
