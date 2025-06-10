const admin = require('firebase-admin');

const initFirebase = () => {
  if (admin.apps.length) return admin.app();
  const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
  return admin.app();
};

module.exports = initFirebase;
