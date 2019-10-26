
window.onload = () => {
    console.log('its loaded')
    const checkNameIsString = (str) => {
        console.log(typeof str)

        var re = /[a-zA-Z]/;
        var isaString = re.exec(str)

        console.log('is a string only :', isaString)
        if(isaString){
            console.log('true')
            return str
        } else if(isaString === null) {
            console.log('false')
            return str
        }

    }
    document.addEventListener('keypress', (event) => {
        let targetElem = event.target.id

        if (targetElem === "firstName") {
            let value = event.target.value
            checkNameIsString(value)
        }

    })


    QUnit.test("Checking if firstname input is a string ", function(assert) {
        var value = "Aj";
        assert.equal(value, checkNameIsString(value), "Aj");
      });

      
    QUnit.test("Checking if firstname is not a number", function(assert) {
        var value = 123;
        assert.equal(value, checkNameIsString(value), false);
      });

  
}