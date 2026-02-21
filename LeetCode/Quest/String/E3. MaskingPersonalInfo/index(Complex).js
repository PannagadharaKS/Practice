/**
 * @param {string} s
 * @return {string}
 */
let maskPII = function (s) {
    let output = ""
    let currentType = s.includes("@") ? "email" : "phone";
    let stringCharacters = s.split("");
    let emailNameCharacters = s.split("@")[0].split("");

    if (currentType == "email") {
        for (let i = 0; i < stringCharacters.length; i++) {
            if (output == "") {
                output += s[0].toLowerCase() + "*****" + emailNameCharacters[emailNameCharacters.length - 1].toLowerCase()
                i = emailNameCharacters.length
            }

            output += stringCharacters[i].toLowerCase();
        }
    }

    if (currentType == "phone") {
        let specialChars = new Set(["(", ")", "-", " "])

        let totalNumbers = 0;
        for(let j = 0; j < stringCharacters.length; j++) {
            if(!isNaN(stringCharacters[j]) && !specialChars.has(stringCharacters[j])) totalNumbers++;
        }

        let countryCodeChars = "";
        let isCountryCodePresent = totalNumbers > 10 ? true : false;
        for(let k = 0; k < totalNumbers - 10; k++) {
            countryCodeChars += "*"
        }

        let isToBeVisible = 4;
        let isToBeHidden = true;
        for (let i = stringCharacters.length - 1; i >= 0; i--) {
            if (specialChars.has(stringCharacters[i])) continue;
            if (isToBeVisible && !isNaN(stringCharacters[i])) {
                output = stringCharacters[i] + output;
                isToBeVisible--;
                continue;
            }

            if (!isToBeVisible) {
                if (isToBeHidden) {
                    output = "***-***-" + output;
                    isToBeHidden = false;
                    if (isCountryCodePresent) {
                        output = "+" + countryCodeChars + "-" + output
                    } else break;
                }
            }
        }
    }

    return output
};