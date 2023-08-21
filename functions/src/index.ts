/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import * as functions from "firebase-functions";
import * as logger from "firebase-functions/logger";

// Start writing functions
// https://firebase.google.com/docs/functions/typescript
import * as admin from "firebase-admin";
admin.initializeApp();


export const copyCalculationToCommunication = functions
  .region("europe-west1").firestore
  .document("users/{userUid}/calculations/{calculationId}")
  .onCreate(async (snapshot, context) => {
    const userUid = context.params.userUid;
    const calculationId = context.params.calculationId;

    const calculationData = snapshot.data();

    const communicationDocRef = admin.firestore()
      .collection("communication").doc(calculationId);

    await communicationDocRef.set({
      userId: userUid,
      ...calculationData,
    });

    logger.log(`Calculation copied to communication collection: 
        ${calculationId}`);

    return null;
  });
