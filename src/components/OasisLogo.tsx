export const OasisLogo = ({ className = "" }) => {
  return (
    <svg
      viewBox="0 0 120 80"
      className={`${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main Building/Veranda Structure */}
      <g>
        {/* Left pillar */}
        <rect x="15" y="35" width="4" height="35" fill="#14532d" />
        
        {/* Right pillar */}
        <rect x="101" y="35" width="4" height="35" fill="#14532d" />
        
        {/* Roof lines - creating a modern veranda look */}
        <line x1="19" y1="35" x2="60" y2="15" stroke="#14532d" strokeWidth="2.5" />
        <line x1="101" y1="35" x2="60" y2="15" stroke="#14532d" strokeWidth="2.5" />
        
        {/* Bronze accent lines */}
        <line x1="22" y1="40" x2="98" y2="40" stroke="#a87d5c" strokeWidth="2" />
        
        {/* Decorative glass/panel elements */}
        <rect x="28" y="42" width="12" height="25" fill="none" stroke="#a87d5c" strokeWidth="1.5" opacity="0.7" />
        <rect x="48" y="42" width="12" height="25" fill="none" stroke="#a87d5c" strokeWidth="1.5" opacity="0.7" />
        <rect x="68" y="42" width="12" height="25" fill="none" stroke="#a87d5c" strokeWidth="1.5" opacity="0.7" />
        <rect x="88" y="42" width="12" height="25" fill="none" stroke="#a87d5c" strokeWidth="1.5" opacity="0.7" />
        
        {/* Leaf/nature accent - bottom corners */}
        <circle cx="18" cy="72" r="3" fill="#a87d5c" />
        <circle cx="102" cy="72" r="3" fill="#a87d5c" />
      </g>

      {/* Animated hover circle effect (optional) */}
      <circle
        cx="60"
        cy="40"
        r="50"
        fill="none"
        stroke="#14532d"
        strokeWidth="0.5"
        opacity="0.1"
      />
    </svg>
  );
};
