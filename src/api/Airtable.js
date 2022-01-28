import Airtable from "airtable";

const airtableBase = new Airtable({
    apiKey: process.env.VUE_APP_MY_AIRTABLE_KEY
}).base(process.env.VUE_APP_MY_AIRTABLE_BASE);

export default airtableBase;
