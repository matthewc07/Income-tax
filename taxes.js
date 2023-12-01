let submit = document.getElementById("submit");
let income = document.getElementById("input1");

let totaltax = document.getElementById("totalfedtax");
let taxrate = document.getElementById("taxedrate");
let netincome = document.getElementById("netincome");
let monthly = document.getElementById("netmonthlyincome");

submit.addEventListener("click", button_clicked);

function button_clicked() 
{
    let grossincome = parseInt(income.value);
    let inc = parseInt(income.value);
    let taxed = 0;
    let taxratemath = 0;

    if (grossincome > 11000) 
    {
        grossincome -= 11000;
        taxed += 11000 * 0.1;

        if (grossincome > 33725) 
        {
            grossincome -= 33725;
            taxed += 33725 * 0.12;

            if (grossincome > 49150) 
            {
                grossincome -= 49150;
                taxed += 49150 * 0.32;

                if (grossincome > 346875) 
                {
                    grossincome -= 346875;
                    taxed += 346875 * 0.35;

                    if (grossincome > 1) 
                    {
                        taxed += grossincome * 0.37;
                    }
                    }
                    else
                    {
                        taxed += grossincome * 0.35;
                    }
                } 
                else
                {
                   taxed += grossincome * 0.32;
                }
           } 
           else 
           {
               taxed += grossincome * 0.12;
           }
       } 
    else 
    {
       taxed = grossincome * 0.1;
    }

    

    let nincome = inc - taxed;
    let month = nincome / 12;

    taxratemath = (taxed / inc);

    totaltax.textContent = taxed;
    taxrate.textContent = taxratemath + "%";
    netincome.textContent = nincome;
    monthly.textContent = month;
}