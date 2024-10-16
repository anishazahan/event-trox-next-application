import { replaceMongoIdInArray, replaceMongoIdInObject } from "@/app/utils/data-util";
import mongoose from "mongoose";
import { eventModel } from "../Models/event.models";
import { userModel } from "../Models/user.model";

async function getAllEvents() {
  const allEvents = await eventModel.find().lean();
  return replaceMongoIdInArray(allEvents);
}

async function getEventById(eventId) {
  const event = await eventModel.findById(eventId).lean();
  return replaceMongoIdInObject(event);
}

async function createUser(user) {
  return await userModel.create(user);
}

async function findUserByCredentials(credentials) {
  const user = await userModel.findOne(credentials).lean();
  if (user) {
    return replaceMongoIdInObject(user);
  }
  return null;
}

async function updateInterest(eventId, authId) {
  const event = await eventModel.findById(eventId);

  if (event) {
    const foundUsers = event.interested_ids.find((id) => id.toString() === authId);

    if (foundUsers) {
      event.interested_ids.pull(new mongoose.Types.ObjectId(authId));
    } else {
      event.interested_ids.push(new mongoose.Types.ObjectId(authId));
    }

    event.save();
  }
}

async function updateGoing(eventId, authId) {
  const event = await eventModel.findById(eventId);
  console.log("event", event);
  if (event) {
    event.going_ids.push(new mongoose.Types.ObjectId(authId));
    event.save();
  }
}

export { createUser, findUserByCredentials, getAllEvents, getEventById, updateGoing, updateInterest };
