import reqHelper from "./reqHelper";

reqHelper('GET','http://kodaday.intita.com/api/task/1')
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    console.log(`Rejected: ${error}`);
                });