import { USER_AVATAR } from "@/lib/assets";

interface PermissionUser {
  id: string;
  name: string;
  email: string;
  avatar: string;
  lastLogin: string;
  permission: string;
  status: string;
}

const PERMISSION_USERS: PermissionUser[] = [
  {
    id: "1",
    name: "אלדד אלחדד",
    email: "eldad@example.com",
    avatar: USER_AVATAR,
    lastLogin: "לפני דקה",
    permission: "אדמין",
    status: "חשבון ראשי / אתם",
  },
];

const COLUMNS = [
  { key: "lastLogin" as const, label: "מועד התחברות אחרון" },
  { key: "permission" as const, label: "הרשאה" },
  { key: "status" as const, label: "סטטוס" },
];

export default function PermissionsPage() {
  return (
    <div>
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 font-polin text-[14px] text-[#001c51]/50 mb-3">
        <a href="/dashboard" className="hover:text-[#006eff] transition-colors">ראשי</a>
        <span>/</span>
        <span className="font-extrabold text-[#006eff]">הרשאות</span>
      </div>

      {/* Page title */}
      <h1
        className="text-[#006eff] font-extrabold mb-4"
        style={{ fontSize: "50px", lineHeight: 1.1 }}
      >
        מורשי גישה לחשבון
      </h1>

      {/* Description */}
      <p className="font-polin text-[18px] text-black leading-8 mb-8">
        ניתן להזמין אנשים נוספים לגשת לחשבון שלך. הם יוכלו לראות ולנהל את כל המידע בחשבון לפי ההרשאות שתגדיר להם.
      </p>

      {/* Invite button */}
      <button
        className="flex items-center justify-center gap-2 text-white font-polin text-[18px] mb-10 transition-opacity hover:opacity-90"
        style={{
          background: "linear-gradient(99.7deg, #006eff 0%, #004299 100%)",
          height: "52px",
          padding: "8px 20px",
          borderRadius: "7px",
          width: "187px",
        }}
      >
        הזמנת אנשים
      </button>

      {/* User rows */}
      {PERMISSION_USERS.map((user) => (
        <div key={user.id} className="bg-white flex items-center mb-4 py-[30px] px-6 rounded-[20px]">

          {/* Col 1 (rightmost in RTL): Avatar + name + email */}
          <div className="flex-1 flex items-center">
            <div className="w-12 h-12 rounded-full overflow-hidden mr-4 ml-4 flex-shrink-0">
              <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="font-extrabold text-[15px] text-[#001c52]">{user.name}</div>
              <div className="font-polin text-[14px] text-[#001c52] opacity-60">{user.email}</div>
            </div>
          </div>

          {/* Col 2: Last login — stacked */}
          <div className="flex-1 flex flex-col gap-0.5">
            <span className="font-extrabold text-[15px] text-[#001c52]">מועד התחברות אחרון</span>
            <span className="font-polin text-[15px] text-[#001c52]">{user.lastLogin}</span>
          </div>

          {/* Col 3: Permission — stacked */}
          <div className="flex-1 flex flex-col gap-0.5">
            <span className="font-extrabold text-[15px] text-[#001c52]">הרשאת גישה:</span>
            <span className="font-polin text-[15px] text-[#001c52]">{user.permission}</span>
          </div>

          {/* Col 4 (leftmost): Status in dashed box */}
          <div className="flex-1 flex justify-end">
            <div className="px-4 py-2 font-extrabold text-[14px] text-[#001c52] opacity-60" >
              {user.status}
            </div>
          </div>

        </div>
      ))}

      {/* Footnote */}
      <p className="font-polin text-[18px] text-[#001c51]/50 mt-4">
        • לבעל החשבון תמיד יש הרשאות מלאות
      </p>
    </div>
  );
}
