# Deferred Items

Items intentionally deferred for future implementation.

---

## Waitlist API Integration

**File:** `src/app/apply/page.tsx` (line ~33)  
**Status:** Mock  
**Priority:** High

The apply page waitlist form currently uses a simulated 1.5s delay (`setTimeout`) instead of a real API call. When the backend is ready, replace the mock with a `POST` request to `/api/v1/waitlist/` using the existing `useWaitlist` hook in `src/hooks/useWaitlist.ts`.

**Fields to submit:** `name`, `email`, `linkedin`, `role`, `goals`  
**Existing hook:** `useWaitlist.ts` — currently targets `NEXT_PUBLIC_API_URL` (default `http://localhost:7071`)
