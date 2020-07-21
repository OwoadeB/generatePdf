module.exports = ({ name }) => {
  const today = new Date();
  return `
    <!doctype html>
    <html>
       <head>
          <meta charset="utf-8">
          <title>PDF Result Template</title>
          <style>
            body {
               font-size:10.5px;
            }

            .container {
            margin:auto;
            padding: 10px 60px;
            }
            
            .header {
            font-weight:600;
            text-align:center;
            color: rgba(0,0,0,.3);
            }
            
            .token {
            display:flex;
            flex-direction:column;
            width: 60%;
            padding: 20px 0px;
            border-radius:4px;
            text-align:center;
            margin:auto;
            border: 2px solid rgba(0,0,0,.2);
            margin-bottom: 20px;
            }
            
            div {
            margin-bottom:20px;
            color: rgba(0,0,0,.5);
            }

            .title {
            display: block;
            margin-bottom:12px;
            font-weight:300;
            color: rgba(0,0,0,.3);
            }
          </style>
       </head>
       <body>
          <div class="container">
            <h1 class="header">TRANSACTION SUMMARY<h1>
            <div class="token">
               <span>Token</span>
               0000-1111-2222-3333-4444
            </div>
            <div>
               <span class="title">Number of Units</span>
               1
            </div>
            <div>
               <span class="title">Meter Number</span>
               54150698519
            </div>
            <div>
               <span class="title">Date of Issue</span>
               Fri, 10 Jul 2020 10:12:59
            </div>
            <div>
               <span class="title">Transaction Reference</span>
               D27DFE5A4DB82511648519
            </div>
            <div>
               <span class="title">Receipt Number</span>
               7342390
            </div>
            <div>
               <span class="title">Total Amount</span>
               ₦ 1,000
            </div>
            <div>
               <span class="title">Service Charge</span>
               ₦ 100
            </div>
            <div>
               <span class="title">Cost of Electricity</span>
               ₦ 950
            </div>
            <div>
               <span class="title">VAT</span>
               ₦ 50
            </div>
            <div>
               <span class="title">Free Units</span>
               kWh
            </div>
            <div>
               <span class="title">Debt</span>
               ₦ 0
            </div>
            <div>
               <span class="title">Payment Type</span>
               CARD
            </div>
            <div>
               <span class="title">Account Name</span>
               Boluwatife Owoade
            </div>
            <div>
               <span class="title">Meter Name</span>
               ${name}
            </div>
            <div>
               <span class="title">Address</span>
               34 Sunday Taiwo street egbe
            </div>
          </div>
       </body>
    </html>
    `;
};
