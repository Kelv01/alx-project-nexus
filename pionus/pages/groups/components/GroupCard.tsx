import { Users, Calendar, DollarSign } from "lucide-react";
import Button from "../../../components/common/Button";

import { GroupCardProps } from "@/interfaces/GroupCard";
import Link from "next/link";

function GroupCard({
  tourName,
  currentMembers,
  minRequired,
  maxSize,
  startDate,
  pricePerPerson,
  daysLeft,
}: GroupCardProps) {
  const spotsLeft = maxSize - currentMembers;
  const progress = (currentMembers / maxSize) * 100;

  return (
    <div className="bg-white rounded-lg border border-merino-200 p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h4 className="text-merino-950 mb-2 font-bold text-2xl">
            {tourName}
          </h4>
          <div className="flex items-center gap-2 text-sm text-merino-600">
            <Calendar />
            <span>Starts {startDate}</span>
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm text-merino-600">Per person</p>
          <p className="text-tahiti-gold-500">
            ${pricePerPerson.toLocaleString()}
          </p>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex items-center justify-between text-sm text-merino-700 mb-2">
          <div className="flex items-center gap-2">
            <Users />
            <span>
              {currentMembers} / {maxSize} members
            </span>
          </div>
          <span className="text-merino-600">{spotsLeft} spots left</span>
        </div>

        <div className="w-full bg-merino-100 rounded-full h-2 overflow-hidden">
          <div
            className="bg-tahiti-gold-500 h-full rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        {currentMembers < minRequired && (
          <p className="text-xs text-merino-600 mt-2">
            Need {minRequired - currentMembers} more to confirm
          </p>
        )}
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm">
          <DollarSign className="text-merino-600" />
          <span className="text-merino-700">
            Save ${((maxSize - currentMembers) * 50).toLocaleString()} if full
          </span>
        </div>
        <Link href="/messages">
          <Button variant="primary" size="sm" className="rounded-lg">
            Join Group
          </Button>
        </Link>
      </div>

      {daysLeft <= 7 && (
        <div className="mt-3 text-xs text-amber-600 bg-amber-50 px-3 py-2 rounded">
          Only {daysLeft} days left to join!
        </div>
      )}
    </div>
  );
}

export default GroupCard;
