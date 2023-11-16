import mongoose, {Schema} from "mongoose"

const coinsSchema = new Schema(
  {
    name: String,
    target: Number
  }
)

const Coins = mongoose.models.Coins || mongoose.model("Coins",coinsSchema)

export default Coins