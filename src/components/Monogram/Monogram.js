import { forwardRef, useId } from 'react';
import { classes } from 'utils/style';
import styles from './Monogram.module.css';

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}monogram-clip`;

  return (
    <svg
      aria-hidden
      className={classes(styles.monogram, className)}
      width="46"
      height="25"
      viewBox="0 0 388 298"
      ref={ref}
      {...props}
    >
      <defs>
      <clipPath id={clipId}>
          <path d="M32 60C32 39 0 31 0 31H40C58 31 64 51 64 60V269H32V60Z" fill="black" />
          <path
            d="M312 282V100L255 207C255 207 288 157 288 173C288 189 276 282 276 282L255 296H387C387 296 387 282 372 282H312Z"
            fill="black"
          />
          <path
            d="M128 282H114C114 282 86 161 100 173C114 185 134 207 134 207L82 100V282H20C8 282 8 296 8 296H140C140 296 140 282 128 282Z"
            fill="black"
          />
          <path
            d="M360 60V269H332V60C332 39 342 31 352 31H387C387 31 360 44 360 60Z"
            fill="black"
          />
          <path
            d="M196 207L235 124L282 107L196 296L105 100L158 124L196 207Z"
            fill="black"
          />
          <path
            d="M242 107L288 87C288 87 298 70 312 39C326 8 352 0 352 0H312C312 0 294 5.72205e-06 282 22C270 44 242 107 242 107Z"
            fill="black"
          />
          <path
            d="M100 87L150 107C150 107 118 43 114 31C110 19 105 0 88 0H32C32 0 64 0 77 31C90 62 100 87 100 87Z"
            fill="black"
          />
          <path d="M269 0L196 157L114 0H150L196 95L235 0H269Z" />
        </clipPath>
      </defs>
      <rect clipPath={`url(#${clipId})`} width="100%" height="100%" />
      {highlight && (
        <g clipPath={`url(#${clipId})`}>
          <rect className={styles.highlight} width="100%" height="100%" />
        </g>
      )}
    </svg>
  );
});
