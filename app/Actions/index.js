"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createUser, findUserByCredentials, updateGoing, updateInterest } from "../Backend/Queries/queries";

async function registerUser(formData) {
  const user = Object.fromEntries(formData);
  const created = await createUser(user);
  redirect("/login");
}

async function performLogin(formData) {
  try {
    // const credential = {};
    // credential.email = formData.get("email");
    // credential.password = formData.get("password");
    // console.log("credential", credential);
    const found = await findUserByCredentials(formData);

    return found;
  } catch (error) {
    throw error;
  }
}

async function addInterestedEvent(eventId, authId) {
  try {
    await updateInterest(eventId, authId);
  } catch (error) {
    throw error;
  }
  revalidatePath("/");
}

async function addGoingEvent(eventId, user) {
  try {
    await updateGoing(eventId, user?.id);
    // await sendEmail(eventId, user);
  } catch (error) {
    throw error;
  }
  revalidatePath("/");
  redirect("/");
}

export { addGoingEvent, addInterestedEvent, performLogin, registerUser };
