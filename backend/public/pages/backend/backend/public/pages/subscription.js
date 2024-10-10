import { saveSubscription } from 'backend/subscription.jsw';

$w.onReady(() => {
  $w("#subscribeButton").onClick(() => {
    let email = $w("#emailInput").value;
    saveSubscription(email)
      .then((result) => {
        console.log("Subscription successful:", result);
        $w("#subscriptionSuccessMessage").show(); 
      })
      .catch((error) => {
        console.error("Subscription failed:", error);
        $w("#subscriptionErrorMessage").show();
      });
  });
});
