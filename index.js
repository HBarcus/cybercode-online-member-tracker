const fs = require("fs");
const { convertCsvToXlsx } = require("@aternus/csv-to-xlsx");

const htmlString = fs.readFileSync("./pastedhtml.html", "utf8");
const membersSectionHTML = htmlString.split("<span>Members</span>")[1].split('<div class="my-loading"></div>')[0];
const eachMemberDiv = membersSectionHTML.split('<div class="relative ion-activatable cursor-pointer w-full mb-2 border border-primary-dark pl-4 pr-4 p-1 items-center relative pb-4">').slice(1);

const memberData = eachMemberDiv.map((member) => {
  const name = member.split('<span class="flex flex-row flex-nowrap">')[1].split("</span")[0];
  const level = parseInt(member.split('<span class="text-xs mr-1">')[1].split('</span><span class=" text-xs">')[0].split("Lv.")[1].replace(/,/g, ""));
  const title = member.split('<span class=" text-xs">[')[1].split("]</span></span></div>")[0];
  const resourceContribution = parseInt(member.split('<div class="flex-row whitespace-nowrap flex-wrap text-primary-dark text-xs"><span class="flex-1 mr-4">')[1].split(" Resource</span>")[0].replace(/,/g, ""));
  const occupationPoints = parseInt(member.split('Resource</span><span class="flex-1 mr-4">')[1].split(" occupation point</span>")[0].replace(/,/g, ""));
  const funding = parseInt(member.split(' occupation point</span><span class="flex-1 mr-4">')[1].split(' funding</span><span class="flex-1 mr-4">')[0].replace(/,/g, ""));
  const experience = parseInt(member.split(' funding</span><span class="flex-1 mr-4">')[1].split(" exp")[0].replace(/,/g, ""));
  const lastOnline = member.split('<span class=" text-xs mr-2 absolute bottom-0 right-0 pb-1">')[1].split("</span>")[0];

  return { name, level, title, resourceContribution, occupationPoints, funding, experience, lastOnline };
});

const generateCSV = (memberList) => {
  const csvData = memberList
    .map((member) => {
      return `${member.name},${member.title},${member.level},${member.resourceContribution},${member.occupationPoints},${member.funding},${member.experience},${member.lastOnline}`;
    })
    .join("\r\n");

  fs.writeFileSync("./GangData.csv", "Name,Title,Level,Resources Contributed,Occupation Points,Funding,XP,Last Online\r\n" + csvData);
  console.log("CSV Generated");
};

generateCSV(memberData);
if (fs.existsSync("./GangData.xlsx")) {
  fs.unlinkSync("./GangData.xlsx");
}
convertCsvToXlsx("./GangData.csv", "./GangData.xlsx");
console.log("Excel file generated");
