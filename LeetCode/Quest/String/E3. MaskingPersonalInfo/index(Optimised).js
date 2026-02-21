/**
 * @param {string} s
 * @return {string}
 */
let maskPII = function (s) {
    let output = ""
    let currentType = s.includes("@") ? "email" : "phone";
    if (currentType == "email") {

        let [name, domain] = s.split("@");
        output = name[0].toLowerCase() + "*****" + name[name.length - 1].toLowerCase() + "@" + domain.toLowerCase();
    }

    if (currentType == "phone") {
        let digits = s.replace(/\D/g, '');
        let local = digits.slice(-10);
        let country = digits.slice(0, -10);

        let masked = "***-***-" + local.slice(-4);
        if (country) masked = "+" + "*".repeat(country.length) + "-" + masked;

        output = masked
    }

    return output;
}