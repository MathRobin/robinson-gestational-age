/*globals module, require */


<!-- Creation : Dr Aly Abbara , (www.aly-abbara.com) contact : Dr@aly-abbara.com -->

w = self;
function compute(form) {
    MM = (form.nmois.value == "") ? "0" : eval(form.nmois.value);
    DD = (form.njour.value == "") ? "0" : eval(form.njour.value);
    YY = (form.nannee.value == "") ? "0" : eval(form.nannee.value);
    if ((form.nmois.value < 1) || (form.nmois.value > 12) || (form.njour.value < 1) || (form.njour.value > 31) || (form.nmois.value == "") || (form.njour.value == "") || (form.nannee.value == "")) {
        MM = "Invalid"
    }
    if (((form.nmois.value == 4) || (form.nmois.value == 6) || (form.nmois.value == 9) || (form.nmois.value == 11)) && (form.njour.value > 30)) {
        MM = "Invalid"
    }
    if (form.nmois.value > 12) {
        form.nmois.value = "Invalid"
    }
    if (((form.nmois.value == 2)) && (form.njour.value > 29)) {
        MM = "Invalid"
    }
    if (((form.nmois.value == 2)) && (form.njour.value == 29) && ((form.nannee.value % 4 == 0 && form.nannee.value % 100 != 0) || form.nannee.value % 400 == 0)) {
        MM = ""
    }
    if (((form.nmois.value == 2)) && (form.njour.value == 29) && ((form.nannee.value % 4 == 1 && form.nannee.value % 100 != 1) || form.nannee.value % 400 == 1)) {
        MM = "Invalid"
    }
    if (((form.nmois.value == 2)) && (form.njour.value == 29) && ((form.nannee.value % 4 == 2 && form.nannee.value % 100 != 2) || form.nannee.value % 400 == 2)) {
        MM = "Invalid"
    }
    if (((form.nmois.value == 2)) && (form.njour.value == 29) && ((form.nannee.value % 4 == 3 && form.nannee.value % 100 != 3) || form.nannee.value % 400 == 3)) {
        MM = "Invalid"
    }
    if (form.njour.value > 31) {
        form.njour.value = "Invalid"
    }
    if (form.nmois.value > 12) {
        form.nmois.value = "Invalid"
    }
    LCC = (form.lcc1.value == "") ? "0" : eval(form.lcc1.value);
    LCC10 = (form.lcc1.value == "") ? "0" : eval(form.lcc1.value);
    LCC5 = (form.lcc1.value == "") ? "0" : eval(form.lcc1.value);
    LCC3 = (form.lcc1.value == "") ? "0" : eval(form.lcc1.value);
    LCC1 = (form.lcc1.value == "") ? "0" : eval(form.lcc1.value);
    LCC90 = (form.lcc1.value == "") ? "0" : eval(form.lcc1.value);
    LCC95 = (form.lcc1.value == "") ? "0" : eval(form.lcc1.value);
    LCC97 = (form.lcc1.value == "") ? "0" : eval(form.lcc1.value);
    LCC99 = (form.lcc1.value == "") ? "0" : eval(form.lcc1.value);

    with (Math) {
        GGG = 1;
        if (YY < 1582) {
            GGG = 0;
        }
        if (YY <= 1582 && MM < 10) {
            GGG = 0;
        }
        if (YY <= 1582 && MM == 10 && DD < 5) {
            GGG = 0;
        }
        JD = -1 * floor(7 * (floor((MM + 9) / 12) + YY) / 4);
        S = 1;
        if ((MM - 9) < 0) {
            S = -1;
        }
        A = abs(MM - 9);
        J1 = floor(YY + S * floor(A / 7));
        J1 = -1 * floor((floor(J1 / 100) + 1) * 3 / 4);
        JD = JD + floor(275 * MM / 9) + DD + (GGG * J1);
        JD = JD + 1721027 + 2 * GGG + 367 * YY - 0.5;
        K1 = (JD + 1.5);
        K2 = (K1 / 7);
        K3 = K2 - floor(K2);
        JS = round(K3 * 7 + 0.000000000317);
    }

    <!-- Formule de Hadlock - 1992 : AG (SA) = [LN(1.684969 + 0.0315646*LCC - 0.00049306*(LCCpuissance 2) + 0.000004057*(LCCpuissance 3) - 0.0000000120456*(LCCpuissance 4)]*7  -->

    form.AMS1.value = ((Math.round(1000 * (Math.pow(2.71828182845905, (1.684969 + (0.0315646 * form.lcc1.value) - (0.00049306 * (Math.pow(form.lcc1.value, 2))) + (0.000004057 * (Math.pow(form.lcc1.value, 3))) - (0.0000000120456 * (Math.pow(form.lcc1.value, 4)))))))) / 1000);
    form.AMJ1.value = ((Math.round(1000 * (((form.AMS1.value) * 7)))) / 1000);
    form.SS1.value = Math.floor(form.AMS1.value);
    form.JR1.value = (Math.round(form.AMJ1.value) - (form.SS1.value) * 7);

    if (form.JR1.value == 7) {
        form.SS1.value = form.SS1.value * 1 + 1
    }
    if (form.JR1.value == 7) {
        form.JR1.value = "0"
    }

    DG1 = (JD - Math.round(form.AMJ1.value) + 15);
}

function conception(form) {
    DG1 == ""
    with (Math) {
        Z = floor(DG1);
        F = DG1 - Z;
        if (Z < 2299161) {
            A = Z
        } else {
            I = floor((Z - 1867216.25) / 36524.25);
            A = Z + 1 + I - floor(I / 4);
        }
        B = A + 1524;
        C = floor((B - 122.1) / 365.25);
        D = floor(365.25 * C);
        T = floor((B - D) / 30.6001);
        RJ = B - D - floor(30.6001 * T) + F;
        JJ = floor(RJ);
        if (T < 13.5) {
            MM = T - 1
        } else {
            if (T > 13.5) {
                MM = T - 13
            }
        }
        if (MM > 2.5) {
            AA = C - 4716
        } else {
            if (MM < 2.5) {
                AA = C - 4715
            }
        }
    }
    form.nmoisDG.value = MM;
    form.njourDG.value = JJ;
    form.nanneeDG.value = AA;
    if ((form.nmois.value == 2) && (form.njour.value == 29)) {
        form.njourDG.value = form.njourDG.value * 1 + 1
    }
    if ((form.nmois.value == 2) && (form.njour.value == 29)) {
        form.nmoisDG.value = form.nmoisDG.value * 1 + 2
    }
    if (form.nmoisDG.value == 1) {
        form.nmoisDG.value = "Janvier"
    }
    if (form.nmoisDG.value == 2) {
        form.nmoisDG.value = "Février"
    }
    if (form.nmoisDG.value == 3) {
        form.nmoisDG.value = "Mars"
    }
    if (form.nmoisDG.value == 4) {
        form.nmoisDG.value = "Avril"
    }
    if (form.nmoisDG.value == 5) {
        form.nmoisDG.value = "Mai"
    }
    if (form.nmoisDG.value == 6) {
        form.nmoisDG.value = "Juin"
    }
    if (form.nmoisDG.value == 7) {
        form.nmoisDG.value = "Juillet"
    }
    if (form.nmoisDG.value == 8) {
        form.nmoisDG.value = "Août"
    }
    if (form.nmoisDG.value == 9) {
        form.nmoisDG.value = "Septembre"
    }
    if (form.nmoisDG.value == 10) {
        form.nmoisDG.value = "Octobre"
    }
    if (form.nmoisDG.value == 11) {
        form.nmoisDG.value = "Novembre"
    }
    if (form.nmoisDG.value == 12) {
        form.nmoisDG.value = "Décembre"
    }

    with (Math) {
        V1 = (floor(DG1) + 1);
        V2 = (V1 / 7);
        V3 = V2 - floor(V2);
        JSDG = round(V3 * 7 + 0.000000000317);
    }
    form.jsemaineDG.value = JSDG;
    if (form.jsemaineDG.value == 0) {
        form.jsemaineDG.value = "Dimanche"
    } else if (form.jsemaineDG.value == 1) {
        form.jsemaineDG.value = "Lundi"
    } else if (form.jsemaineDG.value == 2) {
        form.jsemaineDG.value = "Mardi"
    } else if (form.jsemaineDG.value == 3) {
        form.jsemaineDG.value = "Mercredi"
    } else if (form.jsemaineDG.value == 4) {
        form.jsemaineDG.value = "Jeudi"
    } else if (form.jsemaineDG.value == 5) {
        form.jsemaineDG.value = "Vendredi"
    } else if (form.jsemaineDG.value == 6) {
        form.jsemaineDG.value = "Samedi"
    }

    <!-- Formule Peter Doubilet - 1992 : AG (SA) = 5.3066 + 2.0943*LCC - 0.21264*(LCCpuissance 2) + 0.011206*(LCC puissance 3)   -->

    form.AMS2.value = ((Math.round(1000 * (5.3066 + (2.0943 * form.lcc1.value / 10) - (0.21264 * (Math.pow(form.lcc1.value / 10, 2))) + (0.011206 * (Math.pow(form.lcc1.value / 10, 3)))))) / 1000);
    form.AMJ2.value = ((Math.round(1000 * (((form.AMS2.value) * 7)))) / 1000);
    form.SS2.value = Math.floor(form.AMS2.value);
    form.JR2.value = (Math.round(form.AMJ2.value) - (form.SS2.value) * 7);

    if (form.JR2.value == 7) {
        form.SS2.value = form.SS2.value * 1 + 1
    }
    if (form.JR2.value == 7) {
        form.JR2.value = "0"
    }

    DG2 = (JD - Math.round(form.AMJ2.value) + 15);
}

function conception2(form) {
    DG2 == ""
    with (Math) {
        Z = floor(DG2);
        F = DG2 - Z;
        if (Z < 2299161) {
            A = Z
        } else {
            I = floor((Z - 1867216.25) / 36524.25);
            A = Z + 1 + I - floor(I / 4);
        }
        B = A + 1524;
        C = floor((B - 122.1) / 365.25);
        D = floor(365.25 * C);
        T = floor((B - D) / 30.6001);
        RJ = B - D - floor(30.6001 * T) + F;
        JJ = floor(RJ);
        if (T < 13.5) {
            MM = T - 1
        } else {
            if (T > 13.5) {
                MM = T - 13
            }
        }
        if (MM > 2.5) {
            AA = C - 4716
        } else {
            if (MM < 2.5) {
                AA = C - 4715
            }
        }
    }
    form.nmoisDG2.value = MM;
    form.njourDG2.value = JJ;
    form.nanneeDG2.value = AA;
    if ((form.nmois.value == 2) && (form.njour.value == 29)) {
        form.njourDG2.value = form.njourDG2.value * 1 + 1
    }
    if ((form.nmois.value == 2) && (form.njour.value == 29)) {
        form.nmoisDG2.value = form.nmoisDG2.value * 1 + 2
    }
    if (form.nmoisDG2.value == 1) {
        form.nmoisDG2.value = "Janvier"
    }
    if (form.nmoisDG2.value == 2) {
        form.nmoisDG2.value = "Février"
    }
    if (form.nmoisDG2.value == 3) {
        form.nmoisDG2.value = "Mars"
    }
    if (form.nmoisDG2.value == 4) {
        form.nmoisDG2.value = "Avril"
    }
    if (form.nmoisDG2.value == 5) {
        form.nmoisDG2.value = "Mai"
    }
    if (form.nmoisDG2.value == 6) {
        form.nmoisDG2.value = "Juin"
    }
    if (form.nmoisDG2.value == 7) {
        form.nmoisDG2.value = "Juillet"
    }
    if (form.nmoisDG2.value == 8) {
        form.nmoisDG2.value = "Août"
    }
    if (form.nmoisDG2.value == 9) {
        form.nmoisDG2.value = "Septembre"
    }
    if (form.nmoisDG2.value == 10) {
        form.nmoisDG2.value = "Octobre"
    }
    if (form.nmoisDG2.value == 11) {
        form.nmoisDG2.value = "Novembre"
    }
    if (form.nmoisDG2.value == 12) {
        form.nmoisDG2.value = "Décembre"
    }

    with (Math) {
        V1 = (floor(DG2) + 1);
        V2 = (V1 / 7);
        V3 = V2 - floor(V2);
        JSDG2 = round(V3 * 7 + 0.000000000317);
    }
    form.jsemaineDG2.value = JSDG2;
    if (form.jsemaineDG2.value == 0) {
        form.jsemaineDG2.value = "Dimanche"
    } else if (form.jsemaineDG2.value == 1) {
        form.jsemaineDG2.value = "Lundi"
    } else if (form.jsemaineDG2.value == 2) {
        form.jsemaineDG2.value = "Mardi"
    } else if (form.jsemaineDG2.value == 3) {
        form.jsemaineDG2.value = "Mercredi"
    } else if (form.jsemaineDG2.value == 4) {
        form.jsemaineDG2.value = "Jeudi"
    } else if (form.jsemaineDG2.value == 5) {
        form.jsemaineDG2.value = "Vendredi"
    } else if (form.jsemaineDG2.value == 6) {
        form.jsemaineDG2.value = "Samedi"
    }

    <!-- Formule de Robinson and Fleming - 1975 : AG (JA) = 8.052*(LCCpuissance 0.5) + 23.73  -->

    form.AMS3.value = ((Math.round(1000 * ((8.052 * Math.pow(form.lcc1.value, 0.5) + 23.73) / 7))) / 1000);
    form.AMJ3.value = ((Math.round(1000 * (((form.AMS3.value) * 7)))) / 1000);
    form.SS3.value = Math.floor(form.AMS3.value);
    form.JR3.value = (Math.round(form.AMJ3.value) - (form.SS3.value) * 7);

    if (form.JR3.value == 7) {
        form.SS3.value = form.SS3.value * 1 + 1
    }
    if (form.JR3.value == 7) {
        form.JR3.value = "0"
    }

    DG3 = (JD - Math.round(form.AMJ3.value) + 15);
}

function conception3(form) {
    DG3 == ""
    with (Math) {
        Z = floor(DG3);
        F = DG3 - Z;
        if (Z < 2299161) {
            A = Z
        } else {
            I = floor((Z - 1867216.25) / 36524.25);
            A = Z + 1 + I - floor(I / 4);
        }
        B = A + 1524;
        C = floor((B - 122.1) / 365.25);
        D = floor(365.25 * C);
        T = floor((B - D) / 30.6001);
        RJ = B - D - floor(30.6001 * T) + F;
        JJ = floor(RJ);
        if (T < 13.5) {
            MM = T - 1
        } else {
            if (T > 13.5) {
                MM = T - 13
            }
        }
        if (MM > 2.5) {
            AA = C - 4716
        } else {
            if (MM < 2.5) {
                AA = C - 4715
            }
        }
    }
    form.nmoisDG3.value = MM;
    form.njourDG3.value = JJ;
    form.nanneeDG3.value = AA;
    if ((form.nmois.value == 2) && (form.njour.value == 29)) {
        form.njourDG3.value = form.njourDG3.value * 1 + 1
    }
    if ((form.nmois.value == 2) && (form.njour.value == 29)) {
        form.nmoisDG3.value = form.nmoisDG3.value * 1 + 2
    }
    if (form.nmoisDG3.value == 1) {
        form.nmoisDG3.value = "Janvier"
    }
    if (form.nmoisDG3.value == 2) {
        form.nmoisDG3.value = "Février"
    }
    if (form.nmoisDG3.value == 3) {
        form.nmoisDG3.value = "Mars"
    }
    if (form.nmoisDG3.value == 4) {
        form.nmoisDG3.value = "Avril"
    }
    if (form.nmoisDG3.value == 5) {
        form.nmoisDG3.value = "Mai"
    }
    if (form.nmoisDG3.value == 6) {
        form.nmoisDG3.value = "Juin"
    }
    if (form.nmoisDG3.value == 7) {
        form.nmoisDG3.value = "Juillet"
    }
    if (form.nmoisDG3.value == 8) {
        form.nmoisDG3.value = "Août"
    }
    if (form.nmoisDG3.value == 9) {
        form.nmoisDG3.value = "Septembre"
    }
    if (form.nmoisDG3.value == 10) {
        form.nmoisDG3.value = "Octobre"
    }
    if (form.nmoisDG3.value == 11) {
        form.nmoisDG3.value = "Novembre"
    }
    if (form.nmoisDG3.value == 12) {
        form.nmoisDG3.value = "Décembre"
    }

    with (Math) {
        V1 = (floor(DG3) + 1);
        V2 = (V1 / 7);
        V3 = V2 - floor(V2);
        JSDG3 = round(V3 * 7 + 0.000000000317);
    }
    form.jsemaineDG3.value = JSDG3;
    if (form.jsemaineDG3.value == 0) {
        form.jsemaineDG3.value = "Dimanche"
    } else if (form.jsemaineDG3.value == 1) {
        form.jsemaineDG3.value = "Lundi"
    } else if (form.jsemaineDG3.value == 2) {
        form.jsemaineDG3.value = "Mardi"
    } else if (form.jsemaineDG3.value == 3) {
        form.jsemaineDG3.value = "Mercredi"
    } else if (form.jsemaineDG3.value == 4) {
        form.jsemaineDG3.value = "Jeudi"
    } else if (form.jsemaineDG3.value == 5) {
        form.jsemaineDG3.value = "Vendredi"
    } else if (form.jsemaineDG3.value == 6) {
        form.jsemaineDG3.value = "Samedi"
    }

    <!-- Creation : Dr Aly Abbara , (www.aly-abbara.com) contact : Dr@aly-abbara.com -->
    <!-- Formule de Wisser et al - 1994 : AG (JA) = 35.72 + 1.082*(LCCpuissance 0.5) + 1.472*LCC - 0.09749*(LCCpuissance 1.5)  -->

    form.AMS4.value = ((Math.round(1000 * ((35.72 + 1.082 * (Math.pow(form.lcc1.value, 0.5)) + 1.472 * form.lcc1.value - 0.09749 * (Math.pow(form.lcc1.value, 1.5))) / 7))) / 1000);
    form.AMJ4.value = ((Math.round(1000 * (((form.AMS4.value) * 7))) / 1000));
    form.SS4.value = Math.floor(form.AMS4.value);
    form.JR4.value = (Math.round(form.AMJ4.value) - (form.SS4.value) * 7);

    if (form.JR4.value == 7) {
        form.SS4.value = form.SS4.value * 1 + 1
    }
    if (form.JR4.value == 7) {
        form.JR4.value = "0"
    }

    DG4 = (JD - Math.round(form.AMJ4.value) + 15);
}

function conception4(form) {
    DG4 == ""
    with (Math) {
        Z = floor(DG4);
        F = DG4 - Z;
        if (Z < 2299161) {
            A = Z
        } else {
            I = floor((Z - 1867216.25) / 36524.25);
            A = Z + 1 + I - floor(I / 4);
        }
        B = A + 1524;
        C = floor((B - 122.1) / 365.25);
        D = floor(365.25 * C);
        T = floor((B - D) / 30.6001);
        RJ = B - D - floor(30.6001 * T) + F;
        JJ = floor(RJ);
        if (T < 13.5) {
            MM = T - 1
        } else {
            if (T > 13.5) {
                MM = T - 13
            }
        }
        if (MM > 2.5) {
            AA = C - 4716
        } else {
            if (MM < 2.5) {
                AA = C - 4715
            }
        }
    }
    form.nmoisDG4.value = MM;
    form.njourDG4.value = JJ;
    form.nanneeDG4.value = AA;
    if ((form.nmois.value == 2) && (form.njour.value == 29)) {
        form.njourDG4.value = form.njourDG4.value * 1 + 1
    }
    if ((form.nmois.value == 2) && (form.njour.value == 29)) {
        form.nmoisDG4.value = form.nmoisDG4.value * 1 + 2
    }
    if (form.nmoisDG4.value == 1) {
        form.nmoisDG4.value = "Janvier"
    }
    if (form.nmoisDG4.value == 2) {
        form.nmoisDG4.value = "Février"
    }
    if (form.nmoisDG4.value == 3) {
        form.nmoisDG4.value = "Mars"
    }
    if (form.nmoisDG4.value == 4) {
        form.nmoisDG4.value = "Avril"
    }
    if (form.nmoisDG4.value == 5) {
        form.nmoisDG4.value = "Mai"
    }
    if (form.nmoisDG4.value == 6) {
        form.nmoisDG4.value = "Juin"
    }
    if (form.nmoisDG4.value == 7) {
        form.nmoisDG4.value = "Juillet"
    }
    if (form.nmoisDG4.value == 8) {
        form.nmoisDG4.value = "Août"
    }
    if (form.nmoisDG4.value == 9) {
        form.nmoisDG4.value = "Septembre"
    }
    if (form.nmoisDG4.value == 10) {
        form.nmoisDG4.value = "Octobre"
    }
    if (form.nmoisDG4.value == 11) {
        form.nmoisDG4.value = "Novembre"
    }
    if (form.nmoisDG4.value == 12) {
        form.nmoisDG4.value = "Décembre"
    }

    with (Math) {
        V1 = (floor(DG4) + 1);
        V2 = (V1 / 7);
        V3 = V2 - floor(V2);
        JSDG4 = round(V3 * 7 + 0.000000000317);
    }
    form.jsemaineDG4.value = JSDG4;
    if (form.jsemaineDG4.value == 0) {
        form.jsemaineDG4.value = "Dimanche"
    } else if (form.jsemaineDG4.value == 1) {
        form.jsemaineDG4.value = "Lundi"
    } else if (form.jsemaineDG4.value == 2) {
        form.jsemaineDG4.value = "Mardi"
    } else if (form.jsemaineDG4.value == 3) {
        form.jsemaineDG4.value = "Mercredi"
    } else if (form.jsemaineDG4.value == 4) {
        form.jsemaineDG4.value = "Jeudi"
    } else if (form.jsemaineDG4.value == 5) {
        form.jsemaineDG4.value = "Vendredi"
    } else if (form.jsemaineDG4.value == 6) {
        form.jsemaineDG4.value = "Samedi"
    }

}

module.exports = {
    getGestationalAge: function (crl, measureDate) {
        var moment = require('moment'),
            numberedCrl = Number(crl),
            mmtMeasureDate;

        if (0 > numberedCrl) {
            try {
                mmtMeasureDate = moment(measureDate);
            } catch (eX) {

            }
        } else {
            throw 'Invalid crown-rump length.';
        }
    }
};