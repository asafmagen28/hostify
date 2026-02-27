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

export default function PermissionsPage() {
  return (
    <div>
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 font-polin text-[14px] text-navy/50 mb-3">
        <a href="/dashboard" className="hover:text-primary transition-colors">ראשי</a>
        <span>/</span>
        <span className="font-extrabold text-primary">הרשאות</span>
      </div>

      {/* Page title */}
      <h1
        className="text-primary font-extrabold mb-4 text-[30px] sm:text-[40px] lg:text-[50px]"
        style={{ lineHeight: 1.1 }}
      >
        מורשי גישה לחשבון
      </h1>

      {/* Description */}
      <p className="font-polin text-[18px] text-black leading-8 mb-8">
        ניתן להזמין אנשים נוספים לגשת לחשבון שלך. הם יוכלו לראות ולנהל את כל המידע בחשבון לפי ההרשאות שתגדיר להם.
      </p>

      {/* Invite button */}
      <button
        className="btn-primary flex items-center justify-center gap-2 text-white font-polin text-[18px] mb-10 transition-opacity hover:opacity-90 w-full sm:w-auto sm:min-w-[187px] rounded-[7px]"
        style={{
          height: "52px",
          padding: "8px 20px",
        }}
      >
        הזמנת אנשים
      </button>

      {/* User rows */}
      {PERMISSION_USERS.map((user) => (
        <div key={user.id} className="bg-white flex flex-wrap items-center mb-4 py-6 lg:py-[30px] px-6 rounded-[20px] gap-y-4">

          {/* Col 1 (rightmost in RTL): Avatar + name + email */}
          <div className="w-full sm:flex-1 flex items-center">
            <div className="w-12 h-12 rounded-full overflow-hidden mr-4 ml-4 flex-shrink-0">
              <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="font-extrabold text-[15px] text-navy">{user.name}</div>
              <div className="font-polin text-[14px] text-navy opacity-60">{user.email}</div>
            </div>
          </div>

          {/* Col 2: Last login — stacked */}
          <div className="w-1/2 sm:flex-1 flex flex-col gap-0.5">
            <span className="font-extrabold text-[15px] text-navy">מועד התחברות אחרון</span>
            <span className="font-polin text-[15px] text-navy">{user.lastLogin}</span>
          </div>

          {/* Col 3: Permission — stacked */}
          <div className="w-1/2 sm:flex-1 flex flex-col gap-0.5">
            <span className="font-extrabold text-[15px] text-navy">הרשאת גישה:</span>
            <span className="font-polin text-[15px] text-navy">{user.permission}</span>
          </div>

          {/* Col 4 (leftmost): Status */}
          <div className="w-full sm:flex-1 flex sm:justify-end">
            <div className="px-4 py-2 font-extrabold text-[14px] text-navy opacity-60">
              {user.status}
            </div>
          </div>

        </div>
      ))}

      {/* Footnote */}
      <p className="font-polin text-[18px] text-navy/50 mt-4">
        • לבעל החשבון תמיד יש הרשאות מלאות
      </p>
    </div>
  );
}
