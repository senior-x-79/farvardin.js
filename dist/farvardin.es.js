/*! farvardin.js - v1.0.2 - 2020-06-07
* https://rapidcode.ir
* Copyright (c) 2020 senior-x-79; Licensed MIT */


const farvardin = {

    isInvalid(dateYear, dateMonth, dateDay) {
        const listDate = [dateYear, dateMonth, dateDay];

        const check = listDate.find((date) => isNaN(date));

        if (isNaN(check) && typeof check != "undefined")
            throw new Error(`Invalid Arguments passed`);
    },

    outputToWhich(dateYear, dateMonth, dateDay, type) {

        switch (type) {

            case "array":
            default:
                return this.outputToArray(dateYear, dateMonth, dateDay);

            case "object":
                return this.outputToObject(dateYear, dateMonth, dateDay);

            case "json":
                return this.outputToJson(dateYear, dateMonth, dateDay);

            case "string":
                const dateMonthLeadZero = (dateMonth < 10) ? "0" + dateMonth : dateMonth;
                const dateDayLeadZero = (dateDay < 10) ? "0" + dateDay : dateDay;
                return this.outputToString(dateYear, dateMonthLeadZero, dateDayLeadZero);

        }
        
    },

    outputToArray(dateYear, dateMonth, dateDay) {
        return [
            dateYear,
            dateMonth,
            dateDay
        ];
    },

    outputToObject(dateYear, dateMonth, dateDay) {
        return {
            year: dateYear,
            month: dateMonth,
            day: dateDay
        };
    },

    outputToJson(dateYear, dateMonth, dateDay) {
        return JSON.stringify(this.outputToObject(dateYear, dateMonth, dateDay));
    },

    outputToString(dateYear, dateMonth, dateDay) {
        return `${dateYear}-${dateMonth}-${dateDay}`;
    },

    gregorianToSolar(gregorianYear, gregorianMonth, gregorianDay, type = "array") {

        var specialDays, solarYear, solarMonth, solarDay, diffYear, days;
        specialDays = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
        if (gregorianYear > 1600) {
            solarYear = 979;
            gregorianYear -= 1600;
        } else {
            solarYear = 0;
            gregorianYear -= 621;
        }
        diffYear = (gregorianMonth > 2) ? (gregorianYear + 1) : gregorianYear;
        days = (365 * gregorianYear) + (parseInt((diffYear + 3) / 4)) - (parseInt((diffYear + 99) / 100)) + (parseInt((diffYear + 399) / 400)) - 80 + gregorianDay + specialDays[gregorianMonth - 1];
        solarYear += 33 * (parseInt(days / 12053));
        days %= 12053;
        solarYear += 4 * (parseInt(days / 1461));
        days %= 1461;
        if (days > 365) {
            solarYear += parseInt((days - 1) / 365);
            days = (days - 1) % 365;
        }
        solarMonth = (days < 186) ? 1 + parseInt(days / 31) : 7 + parseInt((days - 186) / 30);
        solarDay = 1 + ((days < 186) ? (days % 31) : ((days - 186) % 30));

        this.isInvalid(solarYear, solarMonth, solarDay);

        return this.outputToWhich(solarYear, solarMonth, solarDay, type);
    },

    solarToGregorian(solarYear, solarMonth, solarDay, type = "array") {
        let specialDays, gregorianYear, gregorianMonth, gregorianDay, days, tempSpecialDays;
        if (solarYear > 979) {
            gregorianYear = 1600;
            solarYear -= 979;
        } else {
            gregorianYear = 621;
        }
        days = (365 * solarYear) + ((parseInt(solarYear / 33)) * 8) + (parseInt(((solarYear % 33) + 3) / 4)) + 78 + solarDay + ((solarMonth < 7) ? (solarMonth - 1) * 31 : ((solarMonth - 7) * 30) + 186);
        gregorianYear += 400 * (parseInt(days / 146097));
        days %= 146097;
        if (days > 36524) {
            gregorianYear += 100 * (parseInt(--days / 36524));
            days %= 36524;
            if (days >= 365) days++;
        }
        gregorianYear += 4 * (parseInt(days / 1461));
        days %= 1461;
        if (days > 365) {
            gregorianYear += parseInt((days - 1) / 365);
            days = (days - 1) % 365;
        }
        gregorianDay = days + 1;
        specialDays = [0, 31, ((gregorianYear % 4 === 0 && gregorianYear % 100 !== 0) || (gregorianYear % 400 === 0)) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        for (gregorianMonth = 0; gregorianMonth < 13; gregorianMonth++) {
            tempSpecialDays = specialDays[gregorianMonth];
            if (gregorianDay <= tempSpecialDays) break;
            gregorianDay -= tempSpecialDays;
        }

        this.isInvalid(gregorianYear, gregorianMonth, gregorianDay);

        return this.outputToWhich(gregorianYear, gregorianMonth, gregorianDay, type);
    }
};

export default farvardin;
