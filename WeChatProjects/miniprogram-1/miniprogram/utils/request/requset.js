"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (url, data) {
    return new Promise(function (resolve, reject) {
        wx.request({
            url: url,
            data: data,
            header: {
                'content-type': 'application/json'
            },
            success: function (res) {
                resolve(res.data);
            }, fail: function (err) {
                reject(err);
            }
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdXNldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlcXVzZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxrQkFBZSxDQUFDLFVBQUMsR0FBVSxFQUFFLElBQVc7SUFDcEMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBQyxNQUFNO1FBQzlCLEVBQUUsQ0FBQyxPQUFPLENBQUM7WUFDUCxHQUFHLEtBQUE7WUFDSCxJQUFJLE1BQUE7WUFDSixNQUFNLEVBQUU7Z0JBQ04sY0FBYyxFQUFFLGtCQUFrQjthQUNuQztZQUNELE9BQU8sWUFBRSxHQUFHO2dCQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDckIsQ0FBQyxFQUFDLElBQUksWUFBQyxHQUFHO2dCQUNOLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUNmLENBQUM7U0FDRixDQUFDLENBQUE7SUFDUixDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKCh1cmw6c3RyaW5nLCBkYXRhOm9iamVjdCApPT57XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+e1xyXG4gICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICB1cmwsIC8v5LuF5Li656S65L6L77yM5bm26Z2e55yf5a6e55qE5o6l5Y+j5Zyw5Z2AXHJcbiAgICAgICAgICAgIGRhdGEsXHJcbiAgICAgICAgICAgIGhlYWRlcjoge1xyXG4gICAgICAgICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgLy8g6buY6K6k5YC8XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3MgKHJlcykge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXMuZGF0YSlcclxuICAgICAgICAgICAgfSxmYWlsKGVycil7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgfSlcclxufSkiXX0=