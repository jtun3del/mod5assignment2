/**
 *
 * @param {GymMember} item
 * @constructor
 */
function GymListMember(item) {
    this.member = item
    this.creatListItemElement = function() {
        let checkOffButton = $(`<button class="checked-off"> Check Off</button>`);

        const $memberDiv = $("<div class='item'>");
        $memberDiv.append(`<div class="id">${this.member.id}</div>`)
        $memberDiv.append(`<div class="fname">${this.member.fname}</div>`)
        $memberDiv.append(`<div class="lname">${this.member.lname}</div>`)
        $memberDiv.append(`<div class="username">${this.member.username}</div>`)
        $memberDiv.append(`<div class="enrollmentDate">${this.member.enrollmentDate}</div>`)
        $memberDiv.append(`<div class="cancellationDate">${this.member.cancellationDate}</div>`)
        $memberDiv.append(`<div class="poolAccess">${this.member.poolAccess}</div>`)
        $memberDiv.append(`<div class="spaAccess">${this.member.spaAccess}</div>`)


        $memberDiv.append(checkOffButton);
        checkOffButton.on("click", function() {$(this).parent().toggleClass("checked");});

        return $memberDiv;


    }
}