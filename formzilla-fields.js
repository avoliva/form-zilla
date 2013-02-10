    var opt = {}
    opt['rules'] =   StocKValidators = {
            A_Zip: {
                required: true,
                maxlength: 5,
                digits: true
            },
            N_First: {
                required: true
            },
            N_Last: {
                required: true
            },
            N_Middle: {
                required: true
            },
            A_Street: {
                required: true
            },
            A_City: {
                required: true
            },
            A_State: {
                required: true
            },
            D_Amount: {
                required: true,
                number: true
            },
            D_Payment: {
                required: true,
                number: true
            },
            D_InterestRate: {
                required: true,
                number: true
            },
            C_Email: {
                required: true,
                email: true
            },
            C_HomePhone: {
                required: true,
                digits: true,
                maxlength: 10
            },
            C_HomePhone1: {
                required: true,
                digits: true,
                maxlength: 3
            },
            C_HomePhone2: {
                required: true,
                digits: true,
                maxlength: 3
            },
            C_HomePhone3: {
                required: true,
                digits: true,
                maxlength: 4
            },
            C_WorkPhone: {
                required: true,
                digits: true,
                maxlength: 10
            },
            C_WorkPhone1: {
                required: true,
                digits: true,
                maxlength: 3
            },
            C_WorkPhone2: {
                required: true,
                digits: true,
                maxlength: 3
            },
            C_WorkPhone3: {
                required: true,
                digits: true,
                maxlength: 4
            },
            O_Age: {
                required: true,
                digits: true,
                maxlength: 10
            },
            O_DateofBirth: {
                required: true,
                date: true
            },
            O_ContactTime: {
                required: true
            },
            O_CreditScore: {
                required: true
            },
            O_Income: {
                required: true,
                number: true
            },
            O_Comment: {
                required: true
            },
            P_MortageExisting: {
                required: true,
                // digits: true,
                min: 10000,
                max: 1000000
            },
            P_ValueEstimated: {
                required: true,
                // digits: true,
                min: 10000,
                max: 1000000
            },
            P_Type: {
                required: true
            },
            P_Interest: {
                required: true,
                digits: true
            },
            P_LoanType: {
                required: true
            },
            P_Foreclosure: {
                required: true
            },
            B_Vertical: {
                required: true
            },
            B_Company: {
                required: true
            },
            B_Website: {
                required: true,
                url: true
            },
            T_DebtAmount: {
                required: true
            }
        }