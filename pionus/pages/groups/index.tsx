import { Search } from "lucide-react";
import { openGroups } from "../../data/tours";
import GroupCard from "@/components/features/groupsSections/GroupCard";

function Groupspage() {
  return (
    <section>
      <div className="min-h-screen bg-merino-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="mb-2 text-merino-950 text-2xl font-bold">
              Open safari Groups
            </h1>
            <p className="text-merino-700">
              Join fellow travelers and split costs for your safari adventure
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-merino-600" />
                <input
                  type="text"
                  placeholder="search by tour name or location"
                  className="w-full pl-10 pr-4 py-3 border border-merino-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-tahiti-gold-500 focus:border-transparent"
                />
              </div>

              <select
                name=""
                id=""
                className="px-4 py-3 border border-merino-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-tahiti-gold-500 focus:border-transparent text-merino-700transparent"
              >
                <option
                  value="
                
                all"
                >
                  All locations
                </option>
                <option value="kenya">Kenya</option>
                <option value="tanzania">Tanzania</option>
                <option value="uganda">Uganda</option>
                <option value="rwanda">Rwanda</option>
                <option value="botswana">Botswana</option>
              </select>

              <select
                name=""
                id=""
                className="px-4 py-3 border border-merino-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-tahiti-gold-500 focus:border-transparent text-merino-700"
              >
                <option value="newest">Sort by: Newest</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="date">Departure Date</option>
                <option value="spots">Spots Available</option>
              </select>
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <p className="text-merino-700 mt-4">
                  <span className="text-merino-900">
                    {openGroups.length} active groups
                  </span>{" "}
                  looking for members
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {openGroups.map((group) => (
                  <GroupCard key={group.id} {...group} />
                ))}
              </div>
            </div>

            <section className="mt-12 bg-merino-100 rounded-xl p-8">
              <div className="max-w-3xl">
                <h3 className="mb-4 text-merino-950 font-bold text-2xl">
                  Why Join an Open Group?
                </h3>
                <div className="space-y-3 text-merino-700">
                  <p>
                    <strong className="text-merino-900">Save Money:</strong>{" "}
                    Share tour costs with other travelers and reduce your
                    per-person expense by up to 40%.
                  </p>
                  <p>
                    <strong className="text-merino-900">
                      Meet New People:
                    </strong>{" "}
                    Connect with like-minded adventurers from around the world
                    and make lasting friendships.
                  </p>
                  <p>
                    <strong className="text-merino-900">
                      Guaranteed Departures:
                    </strong>{" "}
                    Once minimum group size is reached, your tour is confirmed
                    and ready to go.
                  </p>
                  <p>
                    <strong className="text-merino-900">
                      Flexible Commitment:
                    </strong>{" "}
                    Join groups forming in the next few weeks or plan ahead for
                    future adventures.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Groupspage;
