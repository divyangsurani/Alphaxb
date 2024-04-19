var num_of_subject;
var showUI = document.getElementById("show");

// initially showing the process into the div
var showMessage = document.getElementById("initialMessage");
var initialDiaplay = 'To calculate your CGPA just click the Above button and generate how many subject or semester you have. Then it will ask you to provide the grade and credit you have earn. Then click calculate . And you are good to go. It will calculate your cgpa and prompt your result .';
var strArray = initialDiaplay.split("");

function animate() {
    if (strArray.length > 0) {
        showMessage.innerHTML += strArray.shift();
    } else {
        return;
    }
    setTimeout(animate, 50);
}
animate();

function generateinputField1() {
    // Taking the number of subject input value
    num_of_subject = document.getElementById('subject_no').value;
    // Change the value String -> Int
    num_of_subject = parseInt(num_of_subject);
    // Generating the template 
    var template = '<div class="row"><div class="total-subject-input-fields"><div class="col-md-offset-2 col-md-8 input-table form-horizontal"><table class="table table-condensed mytable"><tr class="dangerous "><td width="50 % ">Subject Name</td><td width="25 % " class="text-center">Credit</td><td class="text-center" width="25 % ">Result</td></tr>';
    for (i = 0; i < num_of_subject; i++) {
        template += '<tr><td width="55%">Subject ' + (i + 1) + '</td><td width="20%"><input type="number" step=".1" class="form-control uni-form-input" value="3" min="0" id="scredit' + i + '"></td> <td width = "20%" ><select class = "mypickeri selectpicker show-tick" id = "sgain' + i + '" ><option value = "4.0" > A + </option> <option value = "3.75" > A </option> <option value = "3.5" > A - </option> <option value = "3.25" > B + </option> <option value = "3" > B </option> <option value = "2.75" > B - </option> <option value = "2.50" > C + </option> <option value = "2.25" > C </option> <option value = "2.0" > D </option> <option value = "0" > F </option> </select> </td> </tr>';
    }
    template += '</table><div class="form-group inputbutton"><div class="col-sm-offset-5 col-sm-7"><input type="submit" class="btn btn-success" onclick="calculateCGPA()" id="calculate" value="Calculate" data-dismiss="modal"><input class="btn btn-danger" type="reset" name="Reset"></div></div></div></div></div>';
    // Showing The template
    showUI.innerHTML = template;
}

function generateinputField() {
    // Taking the number of subject input value
    no_of_year = document.getElementById('semister_no').value;
    // Change the value String -> Int
    no_of_year = parseInt(no_of_year);
    // Generating the template 
    var template = '<div class="row"><div class="total-subject-input-fields"><div class="col-md-offset-2 col-md-8 input-table form-horizontal"><table class="table table-condensed mytable"><tr class="dangerous "><td width="50 % ">Year</td><td width="25 % " class="text-center">Credit</td><td class="text-center" width="25 % ">Result</td></tr>';
    for (i = 0; i < no_of_year; i++) {
        template += '<tr><td width="55%">Semester ' + (i + 1) + '</td><td width="20%"><input type="number" step=".1" class="form-control uni-form-input" value="23" id="yearcredit' + i + '" min = "0"></td> <td width = "20%" ><input type="number" step=".1" class="form-control uni-form-input" value="3" id="yeargain' + i + '" max = "4" min = "0"> </td> </tr>';
    }
    template += '</table><div class="form-group inputbutton"><div class="col-sm-offset-5 col-sm-7"><input type="submit" class="btn btn-success" onclick="calculateCGPA1()" id="calculate" value="Calculate" data-dismiss="modal"><input class="btn btn-danger" type="reset" name="Reset"></div></div></div></div></div>';
    // Showing The template
    showUI.innerHTML = template;
}
// Calculation of CGPA
function calculateCGPA() {
    var total_gain = 0;
    var total_credit = 0;
    // Taking the value from input field
    var s_credit = [];
    var s_gain = [];
    for (i = 0; i < num_of_subject; i++) {
        s_credit.push(document.getElementById('scredit' + i).value);
        s_gain.push(document.getElementById('sgain' + i).value);
    }
    // Calculation With The Value
    for (i = 0; i < num_of_subject; i++) {
        if (s_gain[i] != 0) {
            total_credit = total_credit + Number(s_credit[i]);
            total_gain = total_gain + (Number(s_credit[i]) * Number(s_gain[i]));
        }
    }
    var result = total_gain / total_credit;
    //alert(result.toFixed(2));
    swal({
        title: "Your CGPA",
        text: result.toFixed(3),
        imageUrl: 'img/thumbs-up.jpg'
    });
}

function calculateCGPA1() {
    var total_yeargain = 0;
    var total_yearcredit = 0;

    // Taking the input from the input field
    var yearcredit = [];
    var yeargain = [];

    for (i = 0; i < no_of_year; i++) {
        yearcredit.push(document.getElementById('yearcredit' + i).value);
        yeargain.push(document.getElementById('yeargain' + i).value);
    }

    // Calculate The Value
    for (i = 0; i < no_of_year; i++) {
        if (yeargain[i] != 0) {
            total_yearcredit = total_yearcredit + Number(yearcredit[i]);
            total_yeargain = total_yeargain + ( Number(yeargain[i]) * Number(yearcredit[i]) );
        }
    }

    var result = 0;
    result = total_yeargain/total_yearcredit;

    // Displaying The Result 

    // alert(result.toFixed(2))

    swal({
        title: "Your CGPA",
        text: result.toFixed(3),
        imageUrl: 'img/thumbs-up.jpg'
    });

}
